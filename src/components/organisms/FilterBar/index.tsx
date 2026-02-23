import clsx from 'clsx';
import { ReactNode, useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { Form } from 'antd';
import { SearchOutlined, ReloadOutlined } from '@ant-design/icons';
import AppButton from '@atoms/AppButton';
import AppDatePicker from '@atoms/AppDatePicker';
import AppFlex from '@atoms/AppFlex';
import AppInput from '@atoms/AppInput';
import AppInputNumber from '@atoms/AppInputNumber';
import AppSelect from '@atoms/AppSelect';

/* ------------------------------------------------------------------ */
/*  Field definitions                                                  */
/* ------------------------------------------------------------------ */

interface BaseField {
  /** Field name — maps to the URL search param key */
  name: string;
  /** Placeholder text */
  placeholder?: string;
  /** Width of the control (px). Default 200 for input, 140 for select */
  width?: number;
}

interface InputField extends BaseField {
  type: 'input';
}

interface SelectField extends BaseField {
  type: 'select';
  options: { value: string; label: string }[];
}

interface NumberField extends BaseField {
  type: 'number';
  min?: number;
  max?: number;
}

interface DateField extends BaseField {
  type: 'date';
}

interface DateRangeField extends BaseField {
  type: 'date-range';
  rangeKeys?: [string, string];
}

export type FilterField = InputField | SelectField | NumberField | DateField | DateRangeField;

/* ------------------------------------------------------------------ */
/*  Component props                                                    */
/* ------------------------------------------------------------------ */

export interface FilterBarProps {
  fields: FilterField[];
  actions?: ReactNode;
  searchText?: string;
  resetText?: string;
  showSearch?: boolean;
  showReset?: boolean;
  className?: string;
  onSearch?: (values: Record<string, string>) => void;
  onReset?: () => void;
}

const DEFAULT_WIDTH: Record<FilterField['type'], number> = {
  input: 200,
  select: 140,
  number: 120,
  date: 160,
  'date-range': 260,
};

/* ------------------------------------------------------------------ */
/*  FilterBar                                                          */
/* ------------------------------------------------------------------ */

export default function FilterBar({
  fields,
  actions,
  searchText = 'Search',
  resetText = 'Reset',
  showSearch = true,
  showReset = true,
  className,
  onSearch,
  onReset,
}: FilterBarProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [form] = Form.useForm();

  const fieldNames = fields.map((f) => f.name);

  const getUrlValues = useCallback(() => {
    const values: Record<string, string | undefined> = {};
    for (const name of fieldNames) {
      const val = searchParams.get(name);
      values[name] = val || undefined;
    }
    return values;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  useEffect(() => {
    form.setFieldsValue(getUrlValues());
  }, [getUrlValues, form]);

  const updateParams = useCallback(
    (values: Record<string, string | undefined>) => {
      setSearchParams((prev) => {
        const next = new URLSearchParams(prev);
        Object.entries(values).forEach(([k, v]) => {
          if (v) next.set(k, v);
          else next.delete(k);
        });
        next.delete('page');
        return next;
      });
    },
    [setSearchParams]
  );

  const handleSearch = (formValues: Record<string, string>) => {
    const clean: Record<string, string> = {};
    for (const name of fieldNames) {
      clean[name] = formValues[name] ?? '';
    }
    updateParams(clean);
    onSearch?.(clean);
  };

  const handleReset = () => {
    form.resetFields();
    const empty: Record<string, string> = {};
    for (const name of fieldNames) empty[name] = '';
    updateParams(empty);
    onReset?.();
  };

  const renderField = (field: FilterField) => {
    const width = field.width ?? DEFAULT_WIDTH[field.type];
    const style = { width };

    switch (field.type) {
      case 'input':
        return <AppInput placeholder={field.placeholder} allowClear style={style} />;
      case 'select':
        return <AppSelect placeholder={field.placeholder} allowClear style={style} options={field.options} />;
      case 'number':
        return <AppInputNumber placeholder={field.placeholder} min={field.min} max={field.max} style={style} />;
      case 'date':
        return <AppDatePicker placeholder={field.placeholder} style={style} />;
      case 'date-range':
        return <AppDatePicker.RangePicker style={style} />;
      default:
        return null;
    }
  };

  return (
    <div
      className={clsx(
        'bg-white rounded-xl p-4 mb-5 shadow-card',
        'border border-primary-100/30',
        className
      )}
    >
      <div className="flex items-center flex-wrap gap-3">
        <Form form={form} layout="inline" size="middle" onFinish={handleSearch}>
          {fields.map((field) => (
            <Form.Item key={field.name} name={field.name} className="!mb-0">
              {renderField(field)}
            </Form.Item>
          ))}

          {(showSearch || showReset) && (
            <Form.Item className="!mb-0">
              <AppFlex gap="small">
                {showSearch && (
                  <AppButton type="primary" htmlType="submit" icon={<SearchOutlined />}>
                    {searchText}
                  </AppButton>
                )}
                {showReset && (
                  <AppButton icon={<ReloadOutlined />} onClick={handleReset}>
                    {resetText}
                  </AppButton>
                )}
              </AppFlex>
            </Form.Item>
          )}
        </Form>

        {actions && <div className="ml-auto flex gap-2">{actions}</div>}
      </div>
    </div>
  );
}

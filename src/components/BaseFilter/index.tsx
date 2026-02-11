import { ReactNode, useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { Button, DatePicker, Form, Input, InputNumber, Select, Space } from 'antd';
import { SearchOutlined, ReloadOutlined } from '@ant-design/icons';

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
  /** The two URL param keys for start/end, e.g. ['start_date','end_date'] */
  rangeKeys?: [string, string];
}

export type FilterField = InputField | SelectField | NumberField | DateField | DateRangeField;

/* ------------------------------------------------------------------ */
/*  Component props                                                    */
/* ------------------------------------------------------------------ */

export interface BaseFilterProps {
  /** Declarative list of filter fields */
  fields: FilterField[];
  /** Right-side action buttons (Add, Export, etc.) */
  actions?: ReactNode;
  /** Search button text. Default "Search" */
  searchText?: string;
  /** Reset button text. Default "Reset" */
  resetText?: string;
  /** Whether to show the search button. Default true */
  showSearch?: boolean;
  /** Whether to show the reset button. Default true */
  showReset?: boolean;
  /** Container className */
  className?: string;
  /** Called after search params are updated (optional) */
  onSearch?: (values: Record<string, string>) => void;
  /** Called after reset (optional) */
  onReset?: () => void;
}

/* ------------------------------------------------------------------ */
/*  Default widths per field type                                      */
/* ------------------------------------------------------------------ */

const DEFAULT_WIDTH: Record<FilterField['type'], number> = {
  input: 200,
  select: 140,
  number: 120,
  date: 160,
  'date-range': 260,
};

/* ------------------------------------------------------------------ */
/*  BaseFilter                                                         */
/* ------------------------------------------------------------------ */

export default function BaseFilter({
  fields,
  actions,
  searchText = 'Search',
  resetText = 'Reset',
  showSearch = true,
  showReset = true,
  className,
  onSearch,
  onReset,
}: BaseFilterProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [form] = Form.useForm();

  /* ---------- derive param names from fields ---------- */
  const fieldNames = fields.map((f) => f.name);

  /* ---------- read initial values from URL ---------- */
  const getUrlValues = useCallback(() => {
    const values: Record<string, string | undefined> = {};
    for (const name of fieldNames) {
      const val = searchParams.get(name);
      values[name] = val || undefined;
    }
    return values;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  /* ---------- sync form ← URL whenever URL changes ---------- */
  useEffect(() => {
    form.setFieldsValue(getUrlValues());
  }, [getUrlValues, form]);

  /* ---------- update URL params ---------- */
  const updateParams = useCallback(
    (values: Record<string, string | undefined>) => {
      setSearchParams((prev) => {
        const next = new URLSearchParams(prev);
        Object.entries(values).forEach(([k, v]) => {
          if (v) next.set(k, v);
          else next.delete(k);
        });
        // reset to first page when filters change
        next.delete('page');
        return next;
      });
    },
    [setSearchParams],
  );

  /* ---------- handlers ---------- */
  const handleSearch = (formValues: Record<string, string>) => {
    // normalise undefined → '' so updateParams can delete them
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

  /* ---------- render a single field ---------- */
  const renderField = (field: FilterField) => {
    const width = field.width ?? DEFAULT_WIDTH[field.type];
    const style = { width };

    switch (field.type) {
      case 'input':
        return <Input placeholder={field.placeholder} allowClear style={style} />;
      case 'select':
        return <Select placeholder={field.placeholder} allowClear style={style} options={field.options} />;
      case 'number':
        return <InputNumber placeholder={field.placeholder} min={field.min} max={field.max} style={style} />;
      case 'date':
        return <DatePicker placeholder={field.placeholder} style={style} />;
      case 'date-range':
        return <DatePicker.RangePicker style={style} />;
      default:
        return null;
    }
  };

  /* ---------- render ---------- */
  return (
    <div className={`bg-white rounded-xl p-4 mb-5 shadow-card border border-primary-100/30 ${className ?? ''}`}>
      <div className="flex items-center flex-wrap gap-3">
        <Form form={form} layout="inline" size="middle" onFinish={handleSearch}>
          {fields.map((field) => (
            <Form.Item
              key={field.name}
              name={field.name}
              className="!mb-0"
            >
              {renderField(field)}
            </Form.Item>
          ))}

          {(showSearch || showReset) && (
            <Form.Item className="!mb-0">
              <Space size="small">
                {showSearch && (
                  <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>
                    {searchText}
                  </Button>
                )}
                {showReset && (
                  <Button icon={<ReloadOutlined />} onClick={handleReset}>
                    {resetText}
                  </Button>
                )}
              </Space>
            </Form.Item>
          )}
        </Form>

        {actions && <div className="ml-auto flex gap-2">{actions}</div>}
      </div>
    </div>
  );
}

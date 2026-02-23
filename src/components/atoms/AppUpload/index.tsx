import clsx from 'clsx';
import { Upload } from 'antd';
import type { UploadProps } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
const { Dragger } = Upload;

const DEFAULT_CLASS = 'rounded-xl';

export default function AppUpload({ className, ...rest }: UploadProps) {
  return <Upload className={clsx(DEFAULT_CLASS, className)} {...rest} />;
}

export function AppUploadDragger({
  className,
  ...rest
}: Omit<UploadProps, 'children'> & { children?: React.ReactNode }) {
  return (
    <Dragger className={clsx(DEFAULT_CLASS, className)} {...rest}>
      {rest.children ?? (
        <>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
        </>
      )}
    </Dragger>
  );
}

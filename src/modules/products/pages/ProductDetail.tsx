import { useEffect } from 'react';
import { Link, useParams } from 'react-router';
import { ArrowLeftOutlined } from '@ant-design/icons';
import AppButton from '@atoms/AppButton';
import AppCard from '@atoms/AppCard';
import AppTypography from '@atoms/AppTypography';
import Spinner from '@atoms/Spinner';
import StatusTag from '@atoms/StatusTag';
import useProductStore from '../hooks/useProductStore';

function DetailRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex py-3 border-b border-slate-100 last:border-0">
      <span className="w-32 text-slate-500 shrink-0">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { detail, detailLoading, fetchById, resetDetail } = useProductStore();

  useEffect(() => {
    if (id) {
      fetchById(id);
    }
    return () => resetDetail();
  }, [id, fetchById, resetDetail]);

  if (detailLoading || !detail) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        {detailLoading ? (
          <Spinner />
        ) : (
          <AppTypography.Text type="secondary">Product not found.</AppTypography.Text>
        )}
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <div className="mb-6 flex items-center gap-3">
        <Link to="/products">
          <AppButton type="text" icon={<ArrowLeftOutlined />}>
            Back to list
          </AppButton>
        </Link>
      </div>

      <AppCard title={<span className="font-semibold">Product details</span>}>
        <DetailRow label="ID" value={detail.id} />
        <DetailRow label="Name" value={detail.name} />
        <DetailRow label="Category" value={detail.category} />
        <DetailRow label="Price" value={`$${detail.price}`} />
        <DetailRow label="Stock" value={detail.stock} />
        <DetailRow label="Status" value={<StatusTag status={detail.status} />} />
        <DetailRow label="Created at" value={detail.createdAt} />
      </AppCard>
    </div>
  );
}

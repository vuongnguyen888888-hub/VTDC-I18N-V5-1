import React from 'react';
import { CloudServerStickyNav } from '../CloudServerStickyNav';
import { SEAMarket } from '../../layout/UtilityBar';

interface VKSStickyNavProps {
  currentMarket?: SEAMarket;
  onOpenConsult?: () => void;
}

export const VKSStickyNav: React.FC<VKSStickyNavProps> = ({ currentMarket }) => {
  return (
    <CloudServerStickyNav
      currentMarket={currentMarket}
      brandLabel="Viettel Kubernetes Service (vKS)"
      ctaLabel="Tài liệu Kubeconfig"
      ctaHref="#docs-support"
    />
  );
};

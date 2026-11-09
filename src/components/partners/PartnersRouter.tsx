'use client';

import React, { lazy, Suspense } from 'react';
import { SEAMarket } from '../layout/UtilityBar';

const PartnersPage = lazy(() => import('./PartnersPage').then(m => ({ default: m.PartnersPage })));
const ResellerPartnerPage = lazy(() => import('./ResellerPartnerPage').then(m => ({ default: m.ResellerPartnerPage })));
const DistributorPartnerPage = lazy(() => import('./DistributorPartnerPage').then(m => ({ default: m.DistributorPartnerPage })));
const AffiliatePartnerPage = lazy(() => import('./AffiliatePartnerPage').then(m => ({ default: m.AffiliatePartnerPage })));
const FeaturedPartnersPage = lazy(() => import('./FeaturedPartnersPage').then(m => ({ default: m.FeaturedPartnersPage })));
const QualcommPartnerPage = lazy(() => import('./QualcommPartnerPage').then(m => ({ default: m.QualcommPartnerPage })));

interface PartnersRouterProps {
  normalizedPath: string;
  currentMarket: SEAMarket;
  currentPath: string;
  onNavigateHome: () => void;
  onNavigate: (path: string) => void;
}

export const PartnersRouter: React.FC<PartnersRouterProps> = ({
  normalizedPath,
  currentMarket,
  currentPath,
  onNavigateHome,
  onNavigate,
}) => {
  const isResellerPartnerPage =
    normalizedPath.includes('/doi-tac/dai-ly') ||
    normalizedPath.includes('/partners/reseller');

  const isDistributorPartnerPage =
    normalizedPath.includes('/doi-tac/nha-phan-phoi') ||
    normalizedPath.includes('/partners/distributor');

  const isAffiliatePartnerPage =
    normalizedPath.includes('/doi-tac/cong-tac-vien') ||
    normalizedPath.includes('/partners/affiliate');

  const isFeaturedPartnersPage =
    normalizedPath.includes('/doi-tac/tieu-bieu') ||
    normalizedPath.includes('/partners/featured');

  const isQualcommPartnerPage =
    normalizedPath.includes('/doi-tac/qualcomm') ||
    normalizedPath.includes('/partners/qualcomm');

  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center py-24">
        <div className="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      {isResellerPartnerPage ? (
        <ResellerPartnerPage
          currentMarket={currentMarket}
          onNavigateHome={onNavigateHome}
          onNavigate={onNavigate}
        />
      ) : isDistributorPartnerPage ? (
        <DistributorPartnerPage
          currentMarket={currentMarket}
          onNavigateHome={onNavigateHome}
          onNavigate={onNavigate}
        />
      ) : isAffiliatePartnerPage ? (
        <AffiliatePartnerPage
          currentMarket={currentMarket}
          onNavigateHome={onNavigateHome}
          onNavigate={onNavigate}
        />
      ) : isFeaturedPartnersPage ? (
        <FeaturedPartnersPage
          currentMarket={currentMarket}
          onNavigateHome={onNavigateHome}
          onNavigate={onNavigate}
        />
      ) : isQualcommPartnerPage ? (
        <QualcommPartnerPage
          currentMarket={currentMarket}
          onNavigateHome={onNavigateHome}
          onNavigate={onNavigate}
        />
      ) : (
        <PartnersPage
          currentMarket={currentMarket}
          onNavigateHome={onNavigateHome}
          currentPath={currentPath}
          onNavigate={onNavigate}
        />
      )}
    </Suspense>
  );
};

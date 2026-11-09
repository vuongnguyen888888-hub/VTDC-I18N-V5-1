/**
 * Viettel IDC — Market Offer & Commercial Contract (Batch 9)
 * Authority for commercial availability, fulfillment (F1/F2/F3), management tiers (T1-T4), and currency.
 */

export type MarketCode = 'vn' | 'int' | string;

export type FulfillmentType = 'F1' | 'F2' | 'F3';
export type ManagementTier = 'T1' | 'T2' | 'T3' | 'T4';
export type PricingModel = 'subscription' | 'pay_as_you_go' | 'tiered' | 'custom_quote' | 'fixed_license';
export type CommercialStatus = 'available' | 'coming_soon' | 'restricted' | 'end_of_life';

export interface MarketOfferRecord {
  offerId: string;
  entityId: string;
  marketCode: MarketCode;
  status: CommercialStatus;
  currency: 'VND' | 'USD';
  fulfillmentType: FulfillmentType;
  managementTier: ManagementTier;
  pricingModel: PricingModel;
  trialAvailable: boolean;
  salesChannel: 'self_serve' | 'sales_assisted' | 'enterprise_only';
  ctaBehavior: 'consultation' | 'trial' | 'pricing' | 'console' | 'contact' | 'quote';
  startingPrice?: {
    amount: number;
    billingCycle: 'monthly' | 'yearly' | 'hourly';
  };
}

/**
 * Validates Market Offer records according to strict architectural contracts.
 */
export function validateMarketOffer(offer: MarketOfferRecord): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!['F1', 'F2', 'F3'].includes(offer.fulfillmentType)) {
    errors.push(`Invalid fulfillmentType: "${offer.fulfillmentType}". Must be F1, F2, or F3.`);
  }

  if (!['T1', 'T2', 'T3', 'T4'].includes(offer.managementTier)) {
    errors.push(`Invalid managementTier: "${offer.managementTier}". Must be T1, T2, T3, or T4.`);
  }

  if (offer.marketCode === 'vn' && offer.currency !== 'VND') {
    errors.push(`Market 'vn' must use 'VND' currency.`);
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

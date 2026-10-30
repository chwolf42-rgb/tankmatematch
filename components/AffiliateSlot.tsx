import { site } from "@/lib/site";

/**
 * Gear and food links stay unrendered until showAffiliateSlots is turned on
 * and a disclosure is added above the first link. The slot is a hook for a
 * later milestone, not a visible placeholder.
 */
export function AffiliateSlot({ id }: { id: string }) {
  if (!site.showAffiliateSlots) return null;
  return <aside data-affiliate-slot={id} />;
}

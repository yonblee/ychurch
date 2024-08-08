import css from "@modules/overview.module.css"
import MembershipCard from './cards/membership.card'
import MembershipGraph from './cards/membership.graph'
import DemographCard from './cards/demograph.card'
import DonationCard from './cards/donation.card'

function MemberOverview() {
  return (
    <div className={`${css.grid} ${css.max} small-padding`}>
      <MembershipCard appearance={"tall"} />
      <MembershipGraph />
      <DemographCard />
      <DonationCard />
    </div>
  )
}

export default MemberOverview
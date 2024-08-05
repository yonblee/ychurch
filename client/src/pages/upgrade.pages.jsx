import Fallback from "@components/fallback.comp"
import { ErrorBoundary } from "react-error-boundary"
import UpgradeIntro from "@components/upgrade/intro.upgrade"
import UpgradePackages from "@components/upgrade/package.upgrade"
import UpgradeBenefits from "@components/upgrade/benefits.upgrade"
import UpgradeHeader from "@components/upgrade/header.upgrade"

const UpgradePage = () => { 
    return (
        <ErrorBoundary FallbackComponent={<Fallback />}>
            <main>
                <UpgradeHeader />
                <UpgradeIntro />
                <UpgradePackages />
                <UpgradeBenefits />
            </main>
        </ErrorBoundary>
    )
 }

 export default UpgradePage
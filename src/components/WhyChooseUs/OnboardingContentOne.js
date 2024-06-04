import React from "react";
import OnboardWrapper from "../../ui/onboarding/OnboardWrapper";
import RightContentOne from "./RightContentOne";

function OnboardingContentOne() {
  return (
    <OnboardWrapper
      rightContent={<RightContentOne />}
      heading="Onboard without the risk."
    />
  );
}

export default OnboardingContentOne;

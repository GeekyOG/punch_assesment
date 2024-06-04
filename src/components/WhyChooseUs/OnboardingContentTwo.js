import React from "react";
import OnboardWrapper from "../../ui/onboarding/OnboardWrapper";
import RightContentTwo from "./RightContentTwo";

function OnboardingContentTwo() {
  return (
    <OnboardWrapper
      rightContent={<RightContentTwo />}
      heading="An open book."
    />
  );
}

export default OnboardingContentTwo;

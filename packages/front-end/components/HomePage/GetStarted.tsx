import React from "react";
import { ExperimentInterfaceStringDates } from "back-end/types/experiment";
import { FeatureInterface } from "back-end/types/feature";
import ExperimentsGetStarted from "./ExperimentsGetStarted";
import Tab from "../Tabs/Tab";
import FeaturesGetStarted from "./FeaturesGetStarted";
import { useState } from "react";
import { useEffect } from "react";
import ControlledTabs from "../Tabs/ControlledTabs";

export interface Props {
  onboardingType: "features" | "experiments";
  experiments: ExperimentInterfaceStringDates[];
  features: FeatureInterface[];
  mutateExperiments: () => void;
  mutateFeatures: (data?: { features: FeatureInterface[] }) => void;
}

export default function GetStarted({
  onboardingType,
  experiments,
  features,
  mutateExperiments,
  mutateFeatures,
}: Props) {
  const [tab, setTab] = useState("features");

  useEffect(() => {
    setTab(onboardingType);
  }, [onboardingType]);

  return (
    <div className="getstarted">
      <div className="mb-3">
        <h1>Let&apos;s get started!</h1>
        <p className="mb-0">Follow the steps below to start using GrowthBook</p>
      </div>
      <ControlledTabs
        setActive={setTab}
        active={tab}
        defaultTab="features"
        newStyle={true}
      >
        <Tab display="Feature Flags" id="features" padding={false}>
          <FeaturesGetStarted features={features} mutate={mutateFeatures} />
        </Tab>
        <Tab display="Experiment Analysis" id="experiments" padding={false}>
          <ExperimentsGetStarted
            experiments={experiments}
            mutate={mutateExperiments}
          />
        </Tab>
      </ControlledTabs>
    </div>
  );
}

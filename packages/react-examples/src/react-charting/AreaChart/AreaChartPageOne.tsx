import * as React from 'react';

import {
  ComponentPage,
  ExampleCard,
  IComponentDemoPageProps,
  PropertiesTableSet,
} from '@fluentui/react-docsite-components';

// import { AreaChartBasicExample } from './AreaChart.Basic.Example';
// import { AreaChartMultipleExample } from './AreaChart.Multiple.Example';
// import { AreaChartStyledExample } from './AreaChart.Styled.Example';
// import { AreaChartCustomAccessibilityExample } from './AreaChart.CustomAccessibility.Example';
import { AreaChartPerfOneExample } from './AreaChart.PerfAnalysisOne.Example';

// const AreaChartBasicExampleCode = require('!raw-loader?esModule=false!@fluentui/react-examples/src/react-charting/AreaChart/AreaChart.Basic.Example.tsx') as string;
// const AreaChartMultipleExampleCode = require('!raw-loader?esModule=false!@fluentui/react-examples/src/react-charting/AreaChart/AreaChart.Multiple.Example.tsx') as string;
// const AreaChartStyledExampleCode = require('!raw-loader?esModule=false!@fluentui/react-examples/src/react-charting/AreaChart/AreaChart.Styled.Example.tsx') as string;
// const AreaChartCustomAccessibilityExampleCode = require('!raw-loader?esModule=false!@fluentui/react-examples/src/react-charting/AreaChart/AreaChart.CustomAccessibility.Example.tsx') as string;
const AreaChartPerfOneExampleCode = require('!raw-loader?esModule=false!@fluentui/react-examples/src/react-charting/AreaChart/AreaChart.PerfAnalysisOne.Example.tsx') as string;

export class AreaChartOne extends React.Component<IComponentDemoPageProps, {}> {
  public render(): JSX.Element {
    return (
      <ComponentPage
        title="Area Chart Page One"
        componentName="AreaChartPerfExampleOne"
        exampleCards={
          <div>
            {/* <ExampleCard title="Area Chart basic" code={AreaChartBasicExampleCode}>
              <AreaChartBasicExample />
            </ExampleCard>
            <ExampleCard title="Multiple Area chart" code={AreaChartMultipleExampleCode}>
              <AreaChartMultipleExample />
            </ExampleCard>
            <ExampleCard title="Styled Area chart" code={AreaChartStyledExampleCode}>
              <AreaChartStyledExample />
            </ExampleCard> */}
            <ExampleCard title="Area chart custom Accessibility" code={AreaChartPerfOneExampleCode}>
              <AreaChartPerfOneExample />
            </ExampleCard>
          </div>
        }
        propertiesTables={
          <PropertiesTableSet
            sources={[
              require<string>('!raw-loader?esModule=false!@fluentui/react-charting/src/components/AreaChart/AreaChart.types.ts'),
              require<string>('!raw-loader?esModule=false!@fluentui/react-charting/src/components/CommonComponents/CartesianChart.types.ts'),
            ]}
          />
        }
        isHeaderVisible={this.props.isHeaderVisible}
      />
    );
  }
}
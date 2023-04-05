import { IAppDefinition } from '@fluentui/react-docsite-components';
import { AppThemes } from './AppThemes';

export const AppDefinition: IAppDefinition = {
  appTitle: 'Fluent UI React - Charting',
  themes: AppThemes,
  testPages: [],
  examplePages: [
    {
      links: [
        // {
        //   component: require<any>('../Legends/LegendsPage').LegendsPage,
        //   key: 'Legends',
        //   name: 'Legends',
        //   url: '#/examples/Legends',
        // },
        // {
        //   component: require<any>('../LineChart/LineChartPage').LineChartPage,
        //   key: 'LineChart',
        //   name: 'Line Chart',
        //   url: '#/examples/linechart',
        // },
        // {
        //   component: require<any>('../LineChart/LineChartPageOne').LineChartPageOne,
        //   key: 'LineChartExampleOne',
        //   name: 'Line Chart example one',
        //   url: '#/examples/linechartone',
        // },
        {
          component: require<any>('../LineChart/LineChartPageTwo').LineChartPageTwo,
          key: 'LineChartExampleTwo',
          name: 'Line Chart Example Two',
          url: '#/examples/linecharttwo',
        },
        {
          component: require<any>('../LineChart/LineChartPageThree').LineChartPageThree,
          key: 'LineChartExampleThree',
          name: 'Line Chart Example Three',
          url: '#/examples/linechartthree',
        },
        {
          component: require<any>('../LineChart/LineChartPageFour').LineChartPageFour,
          key: 'LineChartExampleFour',
          name: 'Line Chart Example Four',
          url: '#/examples/linechartfour',
        },
        // {
        //   component: require<any>('../AreaChart/AreaChartPage').AreaChart,
        //   key: 'AreaChart',
        //   name: 'Area Chart',
        //   url: '#/examples/areachart',
        // },
        // {
        //   component: require<any>('../AreaChart/AreaChartPageOne').AreaChartPageOne,
        //   key: 'AreaChartExampleOne',
        //   name: 'Area Chart Example One',
        //   url: '#/examples/areachartone',
        // },
        {
          component: require<any>('../AreaChart/AreaChartPageTwo').AreaChartPageTwo,
          key: 'AreaChartExampleTwo',
          name: 'Area Chart Example Two',
          url: '#/examples/areacharttwo',
        },
        {
          component: require<any>('../AreaChart/AreaChartPageThree').AreaChartPageThree,
          key: 'AreaChartExampleThree',
          name: 'Area Chart Example Three',
          url: '#/examples/areachartthree',
        },
        // {
        //   component: require<any>('../VerticalBarChart/VerticalBarChartPage').VerticalBarChartPage,
        //   key: 'VerticalBarChart',
        //   name: 'Vertical Bar Chart',
        //   url: '#/examples/verticalbarchart',
        // },
        // {
        //   component: require<any>('../VerticalStackedBarChart/VerticalStackedBarChartPage').VerticalBarChartPage,
        //   key: 'VerticalStackedBarChart',
        //   name: 'Vertical Stacked Bar Chart',
        //   url: '#/examples/VerticalStackedBarChart',
        // },
        // {
        //   component: require<any>('../GroupedVerticalBarChart/GroupedVerticalBarChartPage').GroupedVerticalBarChart,
        //   key: 'GroupedVerticalBarChart',
        //   name: 'Grouped Vertical Bar Chart',
        //   url: '#/examples/GroupedVerticalBarChart',
        // },
        // {
        //   component: require<any>('../HorizontalBarChart/HorizontalBarChartPage').HorizontalBarChartPage,
        //   key: 'HorizontalBarChart',
        //   name: 'Horizontal Bar Chart',
        //   url: '#/examples/horizontalbarchart',
        // },
        // {
        //   component: require<any>('../StackedBarChart/StackedBarChartPage').StackedBarChartPage,
        //   key: 'StackedBarChart',
        //   name: 'Stacked Bar Chart',
        //   url: '#/examples/stackedbarchart',
        // },
        // {
        //   component: require<any>('../MultiStackedBarChart/MultiStackedBarChartPage').MultiStackedBarChartPage,
        //   key: 'MultiStackedBarChart',
        //   name: 'Multi Stacked Bar Chart',
        //   url: '#/examples/MultiStackedBarChart',
        // },
        // {
        //   component: require<any>('../PieChart/PieChartPage').PieChartPage,
        //   key: 'PieChart',
        //   name: 'Pie Chart',
        //   url: '#/examples/piechart',
        // },
        // {
        //   component: require<any>('../DonutChart/DonutChartPage').DonutChartPage,
        //   key: 'DonutChart',
        //   name: 'Donut Chart',
        //   url: '#/examples/Donutchart',
        // },
        // {
        //   component: require<any>('../HeatMapChart/HeatMapChartPage').HeatMapChart,
        //   key: 'HeatMapChart',
        //   name: 'Heat Map Chart',
        //   url: '#/examples/HeatMapChart',
        // },
        // {
        //   component: require<any>('../SankeyChart/SankeyChartPage').SankeyChartPage,
        //   key: 'SankeyChart',
        //   name: 'Sankey Chart',
        //   url: '#/examples/sankeychart',
        // },
        // {
        //   component: require<any>('../TreeChart/TreeChartPage').TreeChartPage,
        //   key: 'TreeChart',
        //   name: 'Tree Chart',
        //   url: '#/examples/treechart',
        // },
        // {
        //   component: require<any>('../SparklineChart/SparklineChartPage').SparklineChartPage,
        //   key: 'SparklineChart',
        //   name: 'Sparkline Chart',
        //   url: '#/examples/sparkline',
        // },
      ],
    },
  ],
  headerLinks: [
    {
      name: 'Getting started',
      url: '#/',
    },
    {
      name: 'Fabric',
      url: 'https://developer.microsoft.com/en-us/fluentui',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/microsoft/fluentui/tree/master/packages/react-charting',
    },
  ],
};

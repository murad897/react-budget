import { Statistic } from "semantic-ui-react";

interface Options {
  size: any;
  colorType?: any;
  labelTitleType?: string;
  valueType?: number;
}

const Ballance = ({ size, colorType, labelTitleType, valueType }: Options) => {
  return (
    <Statistic size={size} color={colorType}>
      <Statistic.Label>{labelTitleType}</Statistic.Label>
      <Statistic.Value>{valueType}</Statistic.Value>
    </Statistic>
  );
};

export default Ballance;

import Callout from "./common/Callout";
import PageHeader from "./common/Information";

export default function Dashboard() {
  return (
    <>
      <PageHeader title="Dashboard" />
      <Callout description="해당 프로젝트는 프론트엔드 공통 환경을 구성하여 바로 적용하고 사용할 수 있게 분리한 개인 프로젝트입니다." />
    </>
  );
}

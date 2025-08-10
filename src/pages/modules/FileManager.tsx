import Callout from "@/components/common/Callout";
import PageHeader from "@/components/common/Information";

export default function FileManager() {
  return (
    <>
      <PageHeader title="FileManager" parentPath="Modules" />
      <Callout description="첨부파일 업로드를 간편하게 지원하는 기능입니다." />
    </>
  );
}

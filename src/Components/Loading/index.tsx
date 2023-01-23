import loadingImg from '../../assets/loading.svg';
import { LoadingContainer } from "./styles";
export default function Loading() {
  return (
    <LoadingContainer>
      <img src={loadingImg} alt="load gif" width={50} height={30} />
    </LoadingContainer>
  )
}

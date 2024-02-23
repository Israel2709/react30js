import { PageHeader } from "../../Components/PageHeader";
import { useParams } from "react-router-dom";

export const UsersDetail = () => {
  const { userKey } = useParams();
  return (
    <>
      <PageHeader>Users detail</PageHeader>
      <p>Estas viendo el detalle del usuario {userKey}</p>
    </>
  );
};

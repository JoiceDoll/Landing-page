import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { IHome, IPost } from "./types";
import OrangeHome from "../../assets/images/orange-img.jpg";
import GreyImageHome from "../../assets/images/grey-house.jpg";
import DesignText from "../../assets/images/designText.png";
import api from "../../services/api/api";

function Home() {
  const validationSchema = Yup.object({
    name: Yup.string().required("Nome é obrigatório"),
    email: Yup.string().required("Email é obrigatório"),
  });

  const navigate = useNavigate();
  const initialValues = {
    name: "",
    email: "",
  };

  async function postRegisterClient(data: IPost) {
    const requestData = {
      nameData: data.nameData,
      emailData: data.emailData,
    };

    try {
      await api.post("/register", requestData);
      navigate("/success");
    } catch (error) {
      console.error(error);
    }
  }

  const handleSubmit = async (values: IHome) => {
    // Aqui realizar a lógica de envio do formulário

    const data = {
      nameData: values.name,
      emailData: values.email,
    };

    await postRegisterClient(data);
  };
  return (
    <>
      <h3 className="absolute top:0; z-10 text-[1.3rem] m-[2%]">
        Construções <br /> limpas e sustentáveis.
      </h3>
      <h4 className="text-white absolute top-[70%] text-[1.3rem] m-[2%] z-10">
        Um time de especialistas focados em <br /> modernidade e preservação.
      </h4>
      <div className="w-[30vw] h-[80vh] absolute z-10 left-[40%] my-[2%]">
        <img src={GreyImageHome} className="w-[90%]" />
      </div>
      <div className="flex w-[100%]">
        <div className="flex flex-col w-[60%] h-[100vh] bg-custom-grey-background">
          <img src={OrangeHome} className="w-[100%] h-[90%]  opacity-40 " />
          <div className="bg-custom-grey-background w-[100%] h-[10vh]"></div>
        </div>
        <div className="w-[50%] h-[100vh]">
          <img src={DesignText} className="mx-[40%] h-[90%] my-[5%]" />
        </div>
      </div>
      <div className="flex w-[100%] h-[100vh]">
        <div className="bg-custom-grey-background w-[54.6%] h-[100%]">
          <div className="w-[80%] h-[80%] mx-[10%] my-[5%] p-11">
            <h1 className="my-[5%] text-center text-white text-[1.3rem]">
              FAÇA SEU ORÇAMENTO CONOSCO!
            </h1>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <div className="my-[12%]">
                  <label htmlFor="name" className="text-white">
                    Como você gostaria de ser chamado(a)?
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="error text-red-500"
                  />
                </div>

                <div className="my-[4%]">
                  <label htmlFor="email" className="my-[10%] text-white ">
                    Digite o seu melhor e-mail:
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error text-red-500"
                  />
                </div>

                <button
                  type="submit"
                  className="align-center bg-custom-orange-background hover:bg-custom-orange-hover text-white py-2 my-[5%] px-4 w-[100%]"
                >
                  Solicitar orçamento
                </button>
              </Form>
            </Formik>
          </div>
        </div>
        <div className="w-[40%] h-[100%]"></div>
      </div>
    </>
  );
}

export default Home;

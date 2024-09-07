import { JoinFormProps } from "@/types";
import { Client, Databases, ID, Models } from "appwrite";

const config = {
  projectId: "66db082e0026283a3aa0",
  databaseId: "66dc42960004da355e8e",
  collectionId: "66dc4332000d3b88b5a0",
};

const { projectId, databaseId, collectionId } = config;

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(projectId);

const databases = new Databases(client);

export const joinUsFunction = async (formData: JoinFormProps) => {
  const promise = databases.createDocument(
    databaseId,
    collectionId,
    ID.unique(),
    formData
  );

  promise.then(
    function (response) {
      console.log(response);
      alert("joined successfully");
    },
    function (error) {
      console.log(error);
      alert(error);
    }
  );
};

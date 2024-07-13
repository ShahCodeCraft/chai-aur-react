import conf from "../conf/conf";
import {Client, ID, Database, Storage,Query} from "appwrite"

export class Service{
    client = new Client();
    database;
    bucket;

    constructor(){
      this.client.setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId)
      this.database = new Database(this.client);
      this.bucket = new Storage(this.client)
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try{
          return await this.database.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                status,
                userId
            }
          )
        }catch(error){
            console.log("Appwrite Service :: createPost :: error", error)
        }
    }


    async updatePost(slug,{title, content, featuredImage, status}){
        try{
          return await this.database.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,

            {
                title,
                content,
                featuredImage,
                status,
            }
          )
        }catch(error){
            console.log("Appwrite Service :: updatePost :: error", error)
        }
    }
 

    async deletePost(slug){
        try{
            await this.database.deleteDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
          )
          return true

        }catch(error){
            console.log("Appwrite Service :: deletePost :: error", error)
            return false
        }
    }

    async getPost( slug){
        try{
          return await this.database.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
          )
        }catch(error){
            console.log("Appwrite Service :: getPost :: error", error)
            return false
        }
    }

    async getPosts(queries = [Query.equal("status",active)]){
        try{
          return await this.database.listDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            queries,
    
          )
        }catch(error){
            console.log("Appwrite Service :: getPost :: error", error)
        }
    }

    // file upload Service

    async uploadFile(file){
        try{
         return await this.bucket.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file
         )
        }catch(error){
         console.log("Appwrite Service :: uploadFile :: error", error)
         return false
        }
    }

    // delete file service

    async deleteFile(fileId){
        try{
          await this.bucket.deleteFile(
            conf.appwriteBucketId,
            fileId
          )
          return true
        }catch(error){
            console.log("Appwrite service :: deleteFile :: error", error)
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

}

const Service = new Service()
export default Service
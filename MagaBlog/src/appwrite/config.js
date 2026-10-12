import conf from '../conf/conf.js';
import { Client, ID , Databases, Storage , Query} from 'appwrite';

export class Service {
    client = new Client()
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl.url)
        .setProject(conf.appwriteUrl.projectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }
    async createPost({title , slug, content , featuredImage , status , userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteUrl.databaseId,
                {
                    title,
                    slug,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            );
            // return post;
        } catch (error) {
            console.error("Error creating post:", error);
            throw error;
        }
    }
    async updatePost(slug,{title , content , featuredImage , status}){
        try{
            return await this.databases.updateDocument(
                conf.appwriteUrl.databaseId,
                conf.appwriteUrl.collectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            );
        }catch(err){
            console.error("Error updating post:", err);
            throw err;
        }
    }
    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                conf.appwriteUrl.databaseId,
                conf.appwriteUrl.collectionId,
                slug
            );
            return true;
        }catch(err){
            console.error("Error deleting post:", err);
            throw err;
        }
    }
    async getPost(slug){
        try{
            return await this.databases.getDocument(
                conf.appwriteUrl.databaseId,
                conf.appwriteUrl.collectionId,
                slug
            );
        }catch(err){
            console.error("Error getting post:", err);
            throw err;
        }
    }
    async getPosts(queries = [Query.equal('status', 'active')]){
        try{
            return await this.databases.listDocuments(
                conf.appwriteUrl.databaseId,
                conf.appwriteUrl.collectionId,
                queries
            );
        }catch(err){
            console.error("Error getting posts:", err);
            throw err;
        }
    }

    async uploadFile(file){
        try{
            return await this.bucket.createFile(
                conf.appwriteUrl.bucketId,
                ID.unique(),
                file
            );
        }catch(err){
            console.error("Error uploading file:", err);
            throw err;
        }
    }
    async deleteFile(fileId){
        try{
            await this.bucket.deleteFile(
                conf.appwriteUrl.bucketId,
                fileId
            );
            return true;
        }catch(err){
            console.error("Error deleting file:", err);
            throw err;
        }
    }

    getFilePreviewUrl(fileId){
        try{
            return this.bucket.getFilePreview(
                conf.appwriteUrl.bucketId,
                fileId
            );
        }catch(err){
            console.error("Error getting file preview url:", err);
            throw err;
        }
    }
}        
const service = new Service();
export default service;

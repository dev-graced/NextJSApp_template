import mongoose from "mongoose";
import { PrismaClient } from '@prisma/client';

// MongoDBに接続するための関数
const connectMongoDB = async() => {
    try {
        await mongoose.connect("mongodb+srv://gracehomondev:EAOXLtaR2hq2Jswx@cluster0.luikv.mongodb.net/nextAppDataBase?retryWrites=true&w=majority&appName=Cluster0", {
        });
        console.log("Success: Connected to MongoDB");

    } catch (error) {
        console.log("Failure: Unconnected to MongoDB");
        console.error(error); // エラーの詳細を表示
        throw new Error("Failed to connect to MongoDB");
    }
};

// Prismaクライアントのインスタンスを作成
export const prisma = new PrismaClient();

/** DB system を選択 */
export const dbType = process.env.DB_TYPE;

const connectDB = async () => {
    if (dbType === 'mongo') {
        await connectMongoDB(); // MongoDBに接続

    } else if (dbType === 'postgres') {
        try {
            // await prisma.$connect(); // PostgreSQLにPrismaを使って接続
            console.log("Success: Connected to PostgreSQL via Prisma");
        } catch (error) {
            console.error("Failure: Unable to connect to PostgreSQL", error);
            throw new Error("Failed to connect to PostgreSQL");
        }
    } else {
        console.error("Unknown DB_TYPE. Please set DB_TYPE to either 'mongo' or 'postgres'.");
        throw new Error("Invalid DB_TYPE specified");
    }
};

export default connectDB;
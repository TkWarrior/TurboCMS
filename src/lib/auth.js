import  { getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import  {prisma}  from "@/lib/prisma"
import NextAuth from "next-auth";
import { email } from "zod";
import bcrypt from "bcryptjs";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/sign-in",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    
    CredentialsProvider({
      name:'Login page',
      credentials : {
          email:{label : "Email ", type:"email" , placeholder:"talib@example.com"},
          password : {label : "Password" , type : "password"}
      },
      async authorize(credentials , req){
        const user = await prisma.user.findUnique({
          where: { email : credentials.email },
        });

        if(!user || !user.password){
          return null;
        }

        const isPasswordValid = await bcrypt.compare(credentials.password , user.password)

        if(isPasswordValid){
          return user;
        }else{
          return null;
        }        
      }
    })
  ],

  callbacks: {
    // if any jwt is created or updated this function will run
    async jwt({ token, user }) {
        if(user){
            const dbUser = await prisma.user.findUnique({
                where:{email: user.email},
                select:{id : true,name:true,email : true,username:true,image:true,role:true}
            })
             if (dbUser) {
               token.id = dbUser.id;
               token.name = dbUser.name;
               token.email =  dbUser.email;
               token.username = dbUser.username;
               token.role = dbUser.role;
               token.image = dbUser.image
             }else{
                const newUser = await prisma.user.create({
                  data: {
                    email: user.email,
                    name: user.name,
                    image: user.image,
                    role: 'user',
                  },
                });
                token.id = newUser.id;
             }
         }
        return token;
    },
    async session({ session, token }) {
        if(token){
            session.user.id = token.id
            session.user.name = token.name
            session.user.email = token.email
            session.user.username = token.username
            session.user.role = token.role
            session.user.image = token.image       
        }
        return session;
    },
    redirect(){
        return '/dashboard'
    }  
  }
}

export const getAuthsession = () => getServerSession(authOptions)


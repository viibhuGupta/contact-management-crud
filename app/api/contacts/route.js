import db from "@/libs/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        // deconstruct the data 
        const {email , name , phone , profile} = await request.json();

        // 
        const newContacts = await db.contact.create({
           data : {
            name ,
            phone ,
            email ,
            profile 
           }

        })  
        console.log(newContacts);
        return NextResponse.json( newContacts,{
            message : "Contact Creaed Sucessful"
        }, {status : 201})


        
    } catch (error) {
        console.log("Error white Creating Contact",error)
        return NextResponse({
            message:"Failed to create Contact",error
        } ,{status : 500})
    }
}
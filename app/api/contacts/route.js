import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        // deconstruct the data 
        const {email , name , phone , profile} = await request.json();
        // creating Object
        const newContacts = {
            email , 
            name , 
            phone , 
            profile
        }
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
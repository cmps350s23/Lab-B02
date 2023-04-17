// next js route component POST
import formidable from "formidable";

export const config = {
    api: {
        bodyParser: false,
    },
}

export async function POST(request) {
    const form = new formidable.IncomingForm();
    form.uploadDir = "./";
    form.keepExtensions = true;
    form.parse(request, (err, fields, files) => {
        console.log(err, fields, files);
    });

    // form.parse(request, (err, fields, files) => {
    //     // if (err) {
    //     //     console.error(err.message);
    //     //     return Response.json({ message: 'Error parsing form data' }, { status: 500 })
    //     // }

    //     // // Do something with the form fields and files
    //     // console.log(fields);
    //     // console.log(files);
    //     // // return Response.json({ message: 'File uploaded successfully' })
    // })

    return Response.json({ message: 'File uploaded successfully' })
}

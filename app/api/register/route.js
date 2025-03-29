export async function POST(req) {
    try {
      const { name, email, phone } = await req.json();
  
      if (!name || !email || !phone) {
        return Response.json({ error: "All fields are required" }, { status: 400 });
      }
  
      // Simpan data ke database (opsional)
      console.log("New Registration:", { name, email, phone });
  
      return Response.json({ message: "Registration successful!" }, { status: 200 });
    } catch (error) {
      return Response.json({ error: "Something went wrong" }, { status: 500 });
    }
  }
  
import Container from "@/components/Container";

export default function page() {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "60vh",
        }}
      >
        <a
          href="/dashboard/addproduct"
          style={{
            backgroundColor: "#be185d",
            color: "white",
            padding: "12px 32px",
            borderRadius: "12px",
            display: "inline-block",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "18px",
            boxShadow: "0 4px 15px rgba(190,24,93,0.3)",
          }}
        >
          ✚ اضافه کردن محصل
        </a>
      </div>
    </Container>
  );
}

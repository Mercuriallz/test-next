import { Card, CardBody, Col, Row } from "react-bootstrap";
import Register from "@/app/(authentication)/register/register";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
  description: "Register Page",
};

export default function Page() {
  return (
    <Row className="justify-content-center">
      <Col md={6}>
        <Card className="mb-4 rounded-0">
          <CardBody className="p-4">
            <h1>Register</h1>
            <p className="text-black-50">Create your account</p>
            <Register />
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}

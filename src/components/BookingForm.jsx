"use client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,

} from "@heroui/react";
import { toast } from "react-toastify";


const BookingForm = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    toast.success("Booking Successful");
  };
  return (
    <div className="w-80 md:w-96 mx-auto">
        <h3 className="text-2xl font-semibold mb-5">Fill the form for booking</h3>
      <Form className="mb-10 flex w-96 flex-col gap-4" onSubmit={onSubmit}>
        <TextField isRequired name="name" type="name">
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
        </TextField>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="Enter your email" />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          minLength={11}
          name="number"
          type="number"
          validate={(value) => {
            if (value.length < 11) {
              return "Phone number must be at least 11 characters";
            }
            return null;
          }}
        >
          <Label>Phone number</Label>
          <Input placeholder="Enter your phone number" />
        </TextField>
        <TextField isRequired name="address" type="text">
          <Label>Address</Label>
          <Input placeholder="Enter your address" />
        </TextField>

        <Button className="w-full" type="submit">
          <Check />
          Confirm Booking
        </Button>
      </Form>
    </div>
  );
};

export default BookingForm;

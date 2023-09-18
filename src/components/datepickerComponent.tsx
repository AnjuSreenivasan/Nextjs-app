"use client";
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button"
import {
    Datetimepicker,
    Input,
    initTE,
  } from "tw-elements";
export default function DatePickerComponent() {
  return (
    <div>
      <Button>Click me</Button>
      <Datetimepicker/>
    </div>
  )
}


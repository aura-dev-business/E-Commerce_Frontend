import React from "react";
import toast, { Toaster } from "react-hot-toast";

const Notification = () => <Toaster position="top-right" reverseOrder={false} />;

export { toast };
export default Notification;
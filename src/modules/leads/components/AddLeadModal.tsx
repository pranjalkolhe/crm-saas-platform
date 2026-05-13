import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Modal from "@/components/ui/Modal";

type AddLeadModalProps = {
  open: boolean;
  onClose: () => void;
};

const leadSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),

  email: z.string().email("Please enter valid email"),

  company: z.string().min(2, "Company name is required"),
});

type FormValues = z.infer<typeof leadSchema>;

const AddLeadModal = ({ open, onClose }: AddLeadModalProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(leadSchema),
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);

    reset();

    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} title="Add New Lead">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Name */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Full Name
          </label>

          <Input
            placeholder="Enter full name"
            className={errors.name ? "border-red-500 focus:border-red-500" : ""}
            {...register("name")}
          />

          {errors.name && (
            <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Email Address
          </label>

          <Input
            placeholder="Enter email address"
            className={
              errors.email ? "border-red-500 focus:border-red-500" : ""
            }
            {...register("email")}
          />

          {errors.email && (
            <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Company */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Company Name
          </label>

          <Input
            placeholder="Enter company name"
            className={
              errors.company ? "border-red-500 focus:border-red-500" : ""
            }
            {...register("company")}
          />

          {errors.company && (
            <p className="mt-2 text-sm text-red-500">
              {errors.company.message}
            </p>
          )}
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 pt-4">
          <Button type="button" variant="secondary" onClick={onClose}>
            Cancel
          </Button>

          <Button type="submit">Add Lead</Button>
        </div>
      </form>
    </Modal>
  );
};

export default AddLeadModal;

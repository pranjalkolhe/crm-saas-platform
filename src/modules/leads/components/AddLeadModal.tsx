import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Modal from "@/components/ui/Modal";
import { toast } from "sonner";
import useLeadStore, { type Lead } from "@/store/useLeadStore";
import { useEffect } from "react";

type AddLeadModalProps = {
  open: boolean;
  onClose: () => void;

  editLead?: Lead | null;
};

const leadSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),

  email: z.string().email("Please enter valid email"),

  company: z.string().min(2, "Company name is required"),

  status: z.string(),

  source: z.string(),

  value: z.string().min(1, "Deal value is required"),
});

type FormValues = z.infer<typeof leadSchema>;

const AddLeadModal = ({ open, onClose, editLead }: AddLeadModalProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(leadSchema),
  });

  const { addLead, updateLead } = useLeadStore();

  useEffect(() => {
    if (editLead) {
      reset({
        name: editLead.name,
        email: editLead.email,
        company: editLead.company,
        status: editLead.status,
        source: editLead.source,
        value: editLead.value,
      });
    }
  }, [editLead, reset]);

  const onSubmit = async (data: FormValues) => {
    try {
      if (editLead) {
        updateLead(editLead.id, {
          ...editLead,
          ...data,
        });

        toast.success("Lead updated successfully");
      } else {
        addLead({
          name: data.name,
          email: data.email,
          company: data.company,
          status: data.status,
          source: data.source,
          value: data.value,
          owner: "Admin",

          initials: data.name
            .split(" ")
            .map((word) => word[0])
            .join("")
            .toUpperCase(),
        });

        toast.success("Lead added successfully");
      }

      reset();

      onClose();
    } catch (error) {
      console.error(error);

      toast.error("Something went wrong");
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={editLead ? "Edit Lead" : "Add New Lead"}
    >
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

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Lead Status
          </label>

          <select
            className="h-11 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 outline-none transition-all focus:border-blue-500"
            {...register("status")}
          >
            <option value="Qualified">Qualified</option>

            <option value="Proposal">Proposal</option>

            <option value="Negotiation">Negotiation</option>

            <option value="Won">Won</option>
            <option value="Lost">Lost</option>
          </select>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Lead Source
          </label>

          <select
            className="h-11 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 outline-none transition-all focus:border-blue-500"
            {...register("source")}
          >
            <option value="Website">Website</option>

            <option value="Referral">Referral</option>

            <option value="Cold Email">Cold Email</option>

            <option value="Event">Event</option>
          </select>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Deal Value
          </label>

          <Input placeholder="$10,000" {...register("value")} />
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 pt-4">
          <Button type="button" variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">{editLead ? "Update Lead" : "Add Lead"}</Button>
        </div>
      </form>
    </Modal>
  );
};

export default AddLeadModal;

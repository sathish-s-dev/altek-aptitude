import { useForm, FormProvider, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const MultistepForm = () => {
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },

    resolver: zodResolver(
      z.object({
        firstName: z.string().min(3, "Name must be at least 1 characters"),
        lastName: z.string().min(1, "Last Name must be at least 10 characters"),
        email: z.string().email("Invalid email address"),
      })
    ),
    mode: "onChange",
  });

  return (
    <div>
      <FormProvider {...methods}>
        <form
          action=""
          onSubmit={methods.handleSubmit((data) => {
            console.log(data);
            alert("Submitted");
          })}
        >
          <div
            className=""
            style={{ display: "flex", flexDirection: "column" }}
          >
            <FormInput
              name="firstName"
              label="Name"
              placeholder="Name"
              control={methods.control}
            />
            <FormInput
              name="lastName"
              label="Last Name"
              placeholder="Name"
              control={methods.control}
            />
            <FormInput
              name="email"
              label="Email"
              placeholder="email"
              control={methods.control}
            />
            <button type="submit">Submit</button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default MultistepForm;

// interface FormInputProps {
//   name: string;
//   control: any;
//   label?: string;
//   type?: string;
//   placeholder?: string;
//   className?: string;
// }

// const FormInput: React.FC<FormInputProps> = ({
//   name,
//   control,
//   label,
//   type = "text",
//   placeholder = "",
//   className = "",
// }) => {
//   return (
//     <div className="mb-4">
//       {label && <label className="block text-sm font-medium">{label}</label>}
//       <Controller
//         name={name}
//         control={control}
//         render={({ field, fieldState }) => (
//           <>
//             <input
//               {...field}
//               type={type}
//               placeholder={placeholder}
//               className={`border p-2 rounded w-full ${
//                 fieldState.error ? "border-red-500" : "border-gray-300"
//               } ${className}`}
//             />
//             {fieldState.error && (
//               <p className="text-red-500 text-xs mt-1">
//                 {fieldState.error.message}
//               </p>
//             )}
//           </>
//         )}
//       />
//     </div>
//   );
// };

// export default FormInput;

// interface FormInputProps {
//   name: string;
//   control: any;
//   label?: string;
//   type?: string;
//   placeholder?: string;
//   className?: string;
// }

const FormInput = ({
  name,
  control,
  label,
  type = "text",
  placeholder = "",
  className = "",
}) => {
  return (
    <div className="mb-4">
      {label && <label className="block text-sm font-medium">{label}</label>}
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <>
            <input
              {...field}
              type={type}
              placeholder={placeholder}
              className={`border p-2 rounded w-full ${
                fieldState.error ? "border-red-500" : "border-gray-300"
              } ${className}`}
            />
            {fieldState.error && (
              <p className="text-red-500 text-xs mt-1">
                {fieldState.error.message}
              </p>
            )}
          </>
        )}
      />
    </div>
  );
};

export { FormInput };

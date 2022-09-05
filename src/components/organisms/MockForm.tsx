import React, { FC } from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  name: string;
};

interface Props {
  onSubmit: (data: any) => void;
}

export const MockForm: FC<Props> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="MockForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}

        {/* include validation with required or other standard HTML validation rules */}
        <input
          defaultValue={"enter your name"}
          {...register("name", { required: true })}
        />

        {/* errors will return when field validation fails  */}
        {errors.name && (
          <div>
            <br />
            <span>Hey there, I need a name to go forward...</span>
            <br />
            <br />
          </div>
        )}

        <input type="submit" />
      </form>
    </div>
  );
};

import { useForm } from 'react-hook-form';
import { capitalize } from '../../utils/stringMethods';

export default function ({ schema, className, onSubmit, data }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form className={className} onSubmit={handleSubmit(onSubmit)}>
      {schema.map(item => {
        console.log(item);
        return (
          <label className="mb-05" key={item.label}>
            {capitalize(item.label)}
            <input
              defaultValue={data ? data[item.label] : ''}
              {...register(item.label, { required: item.required })}
            />
            {errors[item.label] && (
              <span className="input-error">{item.error}</span>
            )}
          </label>
        );
      })}
      <input type="submit" value="Save" />
    </form>
  );
}

import { useRouter } from 'next/router';
import { clientSchema } from '../../schemas/lodgeSchema';
import Form from './Form';

export default function LodgeForm({ data }) {
  const router = useRouter();

  const onSubmit = async formData => {
    const body = JSON.stringify(formData);
    const method = data ? 'PUT' : 'POST';
    const headers = { 'Content-Type': 'application/json' };

    const response = await fetch(
      data ? `/api/lodges/${data._id}` : '/api/lodges',
      { method, headers, body }
    );

    const { status, msg } = await response.json();

    if (status === 'success') {
      router.push(data ? `/lodges/${data._id}` : '/lodges');
    } else {
      console.log(msg);
    }
  };

  return (
    <Form
      onSubmit={onSubmit}
      className="form form--lodge"
      schema={clientSchema}
      data={data}
    />
  );
}

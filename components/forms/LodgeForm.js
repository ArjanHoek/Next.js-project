import { useRouter } from 'next/router';
import { useState } from 'react';

export default function LodgeForm({ data }) {
  const router = useRouter();

  const [name, setName] = useState(data?.name || '');
  const [country, setCountry] = useState(data?.country || '');

  const handleChange = ({ target: { value, name } }) =>
    ({
      name: setName,
      country: setCountry,
    }[name](value));

  const handleSubmit = async event => {
    event.preventDefault();

    const input = {
      name,
      country,
    };

    const options = {
      method: data ? 'PUT' : 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    };

    const apiEndPoint = data ? `/api/lodges/${data._id}` : '/api/lodges';
    const response = await fetch(apiEndPoint, options);

    const { status, msg } = await response.json();

    if (status === 'success') {
      const endpoint = data ? `/lodges/${data._id}` : '/lodges';
      router.push(endpoint);
    } else {
      console.log(msg);
    }
  };

  return (
    <form className="form--lodge" onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" name="name" value={name} onChange={handleChange} />
      <label>Country</label>
      <input
        type="text"
        name="country"
        value={country}
        onChange={handleChange}
      />
      <input type="submit" value="Save" />
    </form>
  );
}

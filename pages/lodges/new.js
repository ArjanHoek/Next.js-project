import { useRouter } from 'next/router';
import { useState } from 'react';
import Layout from '../../components/layout';

export default function () {
  const router = useRouter();

  const [name, setName] = useState('');
  const [country, setCountry] = useState('');

  const fnMap = {
    name: setName,
    country: setCountry,
  };

  const handleChange = ({ target: { value, name } }) => fnMap[name](value);

  const handleSubmit = async event => {
    event.preventDefault();

    const input = {
      name,
      country,
    };

    const endpoint = '/api/create-lodge';

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    };

    const response = await fetch(endpoint, options);
    const {
      status,
      data: { _id: lodgeId },
    } = await response.json();

    if (status === 'success') {
      router.push(`/lodges/${lodgeId}`);
    } else {
      console.log('Highlight fields that are invalid...');
    }
  };

  return (
    <Layout>
      <h3>Create Lodge</h3>
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
    </Layout>
  );
}

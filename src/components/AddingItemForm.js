import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import '../assets/css/AddingItemForm.css'
import Tags from '@yaireo/tagify/dist/react.tagify'
import '@yaireo/tagify/dist/tagify.css'

export default function AddingItemForm() {
  const { register, handleSubmit, errors, control } = useForm()

  //   async function makePostRequest(data) {

  //     params = {
  //         name: data.name,
  //         desc: data.desc,
  //         price: data.price,
  //         keywords: data.keywords,
  //         seller_id:
  //       }

  //     let res = await axios.post('http://localhost:3000/users/', params);

  //     console.log(res.data);
  // }

  const onSubmit = data => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <p>Nazwa produktu</p>
        <div>
          <input name='name' ref={register({ required: true })} className='input' />
        </div>
      </label>
      <div>{errors.name && <p>Name is required!</p>}</div>

      <label>
        <p>Cena</p>
        <div>
          <input className='input' type='number' name='price' ref={register({ pattern: 'd*' })} />
        </div>
      </label>
      <div>{errors.price && <p>Price is required!</p>}</div>
      <label>
        <p>Dodaj słowa kluczowe</p>

        <Controller
          control={control}
          className='input'
          name='keywords'
          render={onChange => {
            return <Tags value='' onChange={onChange} />
          }}
        />
      </label>
      <input id='sbt-btn' type='submit' />
    </form>
  )
}

import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import '../assets/css/AddingItemForm.css'

import Tags from '@yaireo/tagify/dist/react.tagify' // React-wrapper file
import '@yaireo/tagify/dist/tagify.css' // Tagify CSS

export default function AddingItemForm() {
  const { register, handleSubmit, errors, control } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Lorem Ipsum
        <div>
          <input name='name' ref={register({ required: true })} />
        </div>
      </label>
      <div>{errors.name && <p>Name is required!</p>}</div>
      <label>
        Lorem Ipsum
        <div>
          <input name='desc' ref={register({ required: true })} />
        </div>
      </label>
      <div>{errors.desc && <p>Desc is required!</p>}</div>
      <label>
        Lorem Ipsum
        <div>
          <input name='sellerId' ref={register({ required: true })} />
        </div>
      </label>
      <div>{errors.sellerId && <p> is required!</p>}</div>
      <label>
        Lorem Ipsum
        <div>
          <input name='price' ref={register({ patter: '^d+$' })} />
        </div>
      </label>
      <div>{errors.price && <p>Price is required!</p>}</div>
      Lorem Ipsum
      <Controller
        control={control}
        name='keywords'
        render={onChange => {
          return <Tags value='' onChange={onChange} />
        }}
      />
      <input type='submit' />
    </form>
  )
}

'use client'
import { Button } from '@/components/button'
import { InputRoot, InputIcon, InputField } from '@/components/input'
import { User, Mail, ArrowRight } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
const subscriptionSchema = z.object({
  name: z.string().min(3, 'O nome deve ter pelomenos 3 caracteres.'),
  email: z
    .string()
    .email()
    .min(1, 'Insira um email.')
    .min(6, 'o e-mail deve ter pelomenos 6 caracteres'),
})
type subscriptionSchemaType = z.infer<typeof subscriptionSchema>
const SubscriptionForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<subscriptionSchemaType>({
    resolver: zodResolver(subscriptionSchema),
  })
  const onSubscribe = (data: subscriptionSchemaType) => {
    console.log(data)
  }
  return (
    <form
      className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]"
      onSubmit={handleSubmit(onSubscribe)}
    >
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Inscrição
      </h2>
      <div className="space-y-3">
        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <User />
            </InputIcon>
            <InputField
              type="text"
              placeholder="Nome completo"
              {...register('name')}
            />
          </InputRoot>
          {errors.name && (
            <p className="text-danger text-xs font-semibold">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <Mail />
            </InputIcon>
            <InputField
              type="email"
              placeholder="email"
              {...register('email')}
            />
          </InputRoot>
          {errors.email && (
            <p className="text-danger text-xs font-semibold">
              {errors.email.message}
            </p>
          )}
        </div>

        <Button type="submit">
          Confirmar
          <ArrowRight />
        </Button>
      </div>
    </form>
  )
}

export default SubscriptionForm

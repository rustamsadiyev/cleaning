import React, { useEffect } from "react";
import Container from "../utils/Utils";
import { useTranslation } from "react-i18next"
import formBg from "../assets/formaim.jpg"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "react-toastify";
import spinner from "../assets/spinner.svg"
import initializeAOS from '../aos/aosSetup'

const Form = () => {
    const scheme=z.object({
        name:z.string().min(3,{message:"Please enter valid name"}),
        phone:z.string().refine((value)=>/^\+?[0-9]{12}$/.test(value??""),"Please enter valid number"),
        message:z.string().min(5,{message:"Please enter valid message"})
    })
  const { t } = useTranslation();
  const {register,handleSubmit, reset, formState:{errors,isDirty,isSubmitting}}=useForm({
    resolver: zodResolver(scheme)
  })

  const onSubmit = async ({name,phone,message})=>{
    try{
        const token="7834379713:AAFt9aTMD5zZmlmL-ZBkjLc6cmVrNutQ8zM"
        const chat_id='-1002418139661'
        const url=`https://api.telegram.org/bot${token}/sendMessage`
        const message1=`Name: ${name} \n Phone Number: ${phone} \n Message: ${message}`
        const res=await axios({url:url,method:"POST",data:{'chat_id':chat_id,'text':message1}})
        reset()
        toast.success(t('formsent.success'))
    }
    catch{
        toast.error(t('formsent.error'))
    }
  }

  useEffect(()=>{
    initializeAOS()
  },[])
  return (
    <div
  id="communication"
  className="py-20 bg-cover bg-center"
  style={{
    backgroundColor: '#ffffff', 
  }}
>
    <Container>
        <div data-aos='flip-right' data-aos-duration='900' style={{backgroundImage:`url(${formBg})`}} className="bg-cover bg-center w-full h-full rounded-3xl py-5 px-5 sm:py-8 sm:px-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-blak md:max-w-[400px] mb-10">{t("form.h2")}</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 items-start">
            
            <input {...register('name')} className={`w-[100%] text-sm sm:text-lg md:max-w-[500px] indent-3 py-2 outline-none rounded-2xl border-2 ${errors.name&&'border-red-500'}`} type="text" placeholder={t("form.name")} />
            <small className='-mt-5 ml-2 text-red-500 font-bold text-[14px]'>{errors.name&&errors.name.message}</small>

            <input {...register('phone')} className={`w-[100%] text-sm sm:text-lg md:max-w-[500px] indent-3 py-2 outline-none rounded-2xl border-2 ${errors.phone&&'border-red-500'}`} type="text" placeholder={t("form.phone")} />
            <small className='-mt-5 ml-2 text-red-500 font-bold text-[14px]'>{errors.phone&&errors.phone.message}</small>

            <textarea {...register('message')} className={`w-[100%] text-sm sm:text-lg md:max-w-[500px] py-2 px-3 outline-none rounded-2xl resize-none border-2 ${errors.message&&'border-red-500'}`} rows={6} placeholder={t("form.message")}></textarea>
            <small className='-mt-5 ml-2 text-red-500 font-bold text-[14px]'>{errors.message&&errors.message.message}</small>

            <button disabled={!isDirty||isSubmitting} className="py-2 w-[100%] flex items-center justify-center cursor-pointer text-sm sm:text-lg md:max-w-[500px] text-white bg-main border-main border-[1px] rounded-2xl hover:bg-transparent hover:border-white transition-colors duration-300">
                {
                    isSubmitting?
                    <img width={30} src={spinner} />
                    :
                    t("form.btn")
                }
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Form;

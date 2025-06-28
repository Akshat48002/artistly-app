"use client";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const categories = ["Singer", "Dancer", "DJ", "Speaker"];
const languages = ["English", "Hindi", "Punjabi", "Tamil", "Others"];

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  bio: yup.string().max(300, "Bio cannot exceed 300 characters"),
  category: yup.array().min(1, "Select a category"),
  languages: yup.array().min(1, "Select at least one language"),
  priceRange: yup.string().required("Fee range is required"),
  location: yup.string().required("Location is required"),
});

const AddArtist = ({ closeModal }) => {
  const { register, handleSubmit, setValue, control, watch, formState: { errors } } = useForm({
    defaultValues: {
      name: "",
      bio: "",
      category: [],
      languages: [],
      priceRange: "",
      location: "",
      image: null,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Artist Data:", data);
    closeModal();
  };

  const selectedCategory = watch("category");
  const selectedLanguages = watch("languages");

  const handleCheckbox = (field, value) => {
    const current = watch(field);
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    setValue(field, updated);
  };

  return (
    <div className="fixed inset-0 z-[999] bg-[#080710]/70 flex justify-center items-center p-2">
      <div className="bg-white/10 backdrop-blur-lg p-4 sm:p-6 rounded-2xl w-full max-w-sm text-white shadow-2xl overflow-y-auto max-h-[85vh]">
        
        <h2 className="text-xl font-bold text-green-500 tracking-wider mb-4 text-center">
          Artist Onboarding
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          
          <input
            type="text"
            placeholder="Artist Name"
            {...register("name")}
            className="w-full p-2 rounded-xl bg-white/30 text-black/70 placeholder:text-black/60 outline-none text-sm"
          />
          {errors.name && <p className="text-red-400 text-xs">{errors.name.message}</p>}

          <textarea
            placeholder="Bio"
            {...register("bio")}
            rows="2"
            className="w-full p-2 rounded-xl bg-white/30 text-black/70 placeholder:text-black/60 outline-none text-sm"
          />
          {errors.bio && <p className="text-red-400 text-xs">{errors.bio.message}</p>}

          {/* Category Single Select */}
          <div>
            <p className="font-semibold text-sm mb-2">Category:</p>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setValue("category", [cat])}
                  className={`px-3 py-1 rounded-full text-xs font-medium border ${
                    selectedCategory.includes(cat)
                      ? "bg-green-500 text-white border-green-500"
                      : "bg-white/10 text-white border-white/20 hover:bg-white/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            {errors.category && <p className="text-red-400 text-xs mt-1">{errors.category.message}</p>}
          </div>

          {/* Languages Multi-Select */}
          <div>
            <p className="font-semibold text-sm mb-2">Languages Spoken:</p>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <label
                  key={lang}
                  className={`flex items-center gap-2 px-3 py-1 rounded-full cursor-pointer border text-xs ${
                    selectedLanguages.includes(lang)
                      ? "bg-green-500 text-white border-green-500"
                      : "bg-white/10 text-white border-white/20 hover:bg-white/20"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedLanguages.includes(lang)}
                    onChange={() => handleCheckbox("languages", lang)}
                    className="hidden"
                  />
                  {lang}
                </label>
              ))}
            </div>
            {errors.languages && <p className="text-red-400 text-xs mt-1">{errors.languages.message}</p>}
          </div>
          <input
            type="text"
            placeholder="Location"
            {...register("priceRange")}
            className="w-full p-2 rounded-xl bg-white/30 text-black/70 placeholder:text-black/60 outline-none text-sm"
          />
          {errors.priceRange && <p className="text-red-400 text-xs">{errors.priceRange.message}</p>}

          {/* Location */}
          <input
            type="text"
            placeholder="Location"
            {...register("location")}
            className="w-full p-2 rounded-xl bg-white/30 text-black/70 placeholder:text-black/60 outline-none text-sm"
          />
          {errors.location && <p className="text-red-400 text-xs">{errors.location.message}</p>}

          {/* Image Upload */}
          <div>
            <p className="font-semibold text-sm">Profile Image (Optional):</p>
            <Controller
              control={control}
              name="image"
              render={({ field }) => (
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => field.onChange(e.target.files[0])}
                  className="mt-2 text-xs"
                />
              )}
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 flex-col sm:flex-row mt-3">
            <button
              type="button"
              onClick={closeModal}
              className="w-full py-2 bg-green-600 rounded hover:bg-green-700 text-xs font-semibold tracking-widest transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full py-2 bg-green-600 rounded hover:bg-green-700 text-xs font-semibold tracking-widest transition"
            >
              Submit
            </button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default AddArtist;

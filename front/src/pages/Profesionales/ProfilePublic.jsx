import {
  getProfessionalByID,
  getProfileByID,
} from "../../services/auth.service.js";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export const ProfilePublic = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState([]);
  const [profesional, setProfesional] = useState([]);
  if (id) {
    useEffect(() => {
      getProfessionalByID(id).then((data) => setProfesional(data));
      getProfileByID(id).then((data) => setProfile(data));
    }, []);
  }

  return (
    <>
      <div className="max-w-full sm:max-w-[1536px] h-[400px] bg-[#DA1641] aspect-w- aspect-h-9 sm:aspect-w-4 sm:aspect-h3">
        {" "}
      </div>
      <div className="flex flex-col">
        <div
          className="w-full sm:w-[200px] h-[200px] relative"
          style={{ position: "relative" }}
        >
          <img
            src={profile.image}
            alt={profile.alt}
            width={200}
            height={200}
            className="absolute md:static md:top-[-100px] md:left-[20px] sm:static top-[-100px] sm:top-0 left-[20px] sm:left-0"
            style={{ position: "absolute" }}
          />
        </div>

        <div className="max-w-full sm:max-w-[600px] sm:-mt-5 sm:-p-5 px-2">
          <h1 className="font-Cardo font-normal text-title-h1">
            {profile.name} {profile.lastname} | {profesional.especialiti}
          </h1>
          <p className="font-Roboto font-normal text-sm">
            {profesional.description}
          </p>
          <p className="font-Roboto font-normal text-sm mt-4">
            <i className="fa fa-users" aria-hidden="true"></i>
            <span>+{profesional.subscribers}</span> Subscriptores
          </p>
        </div>
      </div>
    </>
  );
};

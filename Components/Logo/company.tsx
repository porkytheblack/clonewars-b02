import styled from '@emotion/styled'
import Image from 'next/image'
import React from 'react'
import andreessen_horowitz from '../../public/assets/logos/andreessen_horowitz.png'   
import spark_capital from '../../public/assets/logos/spark_capital.png'
import y_combinator from '../../public/assets/logos/y_combinator.png'
import swimply from "../../public/assets/logos/swimply.png"
import deel from "../../public/assets/logos/deel.png"
import sunday from "../../public/assets/logos/sunday.png"
import amazon from "../../public/assets/logos/amazon.png"
import sap from "../../public/assets/logos/sap.png"
import google from "../../public/assets/logos/google.png"
import directv from "../../public/assets/logos/directv.png"
import oracle from "../../public/assets/logos/oracle.png"
import allstate from "../../public/assets/logos/allstate.png"
import doordash from "../../public/assets/logos/doordash.png"
import uber from "../../public/assets/logos/uber.png"
import emotive from "../../public/assets/logos/emotive.png"
import wework from "../../public/assets/logos/wework.png"


import { CSSProperties } from '@emotion/serialize'

function Company({name, style}: {name: "andreessen_horowitz" | "spark_capital" | "y_combinator" | "swimply" | "deel" | "sunday"| "amazon" | "sap" | "google" , style?: React.CSSProperties}) {
  return (
    <span  className="mr-4" >
        <CustomImg  style={style} src={name == "andreessen_horowitz" ? andreessen_horowitz : name == "spark_capital" ? spark_capital : name == "y_combinator" ? y_combinator: name=="swimply" ? swimply : name == "deel" ? deel : name == "sunday" ? sunday : name == "amazon" ? amazon: name == "sap" ? sap : name == "google" ? google :  name == "directv" ? directv : name == "oracle" ? oracle : name == "allstate" ? allstate: name == "doordash" ? doordash : name == "uber" ? uber : name == "emotive" ? emotive : name == "wework" ? wework : ""}  alt={name} />
    </span>
  )
}

export default Company

const CustomImg = styled(Image)`
`   
#!/bin/bash
RESTORE='\033[0m'
RED='\033[00;31m'
GREEN='\033[00;32m'
YELLOW='\e[0;33m'

# Because nobody wants to be memorizing commands all the time (tonylampada)
# Instructions:
# 1) ". dev.sh"
# 2) "devhelp"
# 3) Be happy

export PROJ_BASE="$(dirname "${BASH_SOURCE[0]}")"
CD=$(pwd)
cd $PROJ_BASE
export PROJ_BASE=$(pwd)
cd $CD

function devhelp {
  echo -e "${GREEN}Hint: autocomplete works for the commands below ;)${RESTORE}"
  echo -e "${RED}--------------------------------------------------${RESTORE}"
  echo -e "${GREEN}devhelp${RESTORE}           Prints this ${RED}help${RESTORE}"
  echo -e ""
  echo -e "${GREEN}backendrun${RESTORE}        Runs ${RED}Express${RESTORE} backend"
  echo -e ""
  echo -e "${GREEN}frontendrun${RESTORE}       Runs ${RED}Nuxt${RESTORE} frontend"
  # echo -e ""
  # echo -e "${GREEN}dkbuild${RESTORE}           Builds a ${RED}docker image${RESTORE} for this project"
  # echo -e ""
  # echo -e "${GREEN}dknpminstall${RESTORE}      Download node dependencies to ${RED}./node_modules/${RESTORE}"
  # echo -e ""
  # echo -e "${GREEN}dkup${RESTORE}              Starts a dockerized ${RED}full development environment${RESTORE}"
  # echo -e ""
  # echo -e "${GREEN}dk <command>${RESTORE}      Runs ${RED}<command>${RESTORE} inside main container"
  # echo -e "                  Example:"
  # echo -e "                   dk ${RED}bash${RESTORE}"
  echo -e ""
  echo -e "${GREEN}dkpgnginx${RESTORE}         Starts dockerized ${RED}nginx and postgres${RESTORE}"
  echo -e ""
}

function backendrun {
  CD=$(pwd)
  cd $PROJ_BASE"/back"
  npm run dev
  exitcode=$?
  cd $CD
  return $exitcode
}

function frontendrun {
  CD=$(pwd)
  cd $PROJ_BASE"/front"
  npm run dev
  exitcode=$?
  cd $CD
  return $exitcode
}

# function dkbuild {
#   CD=$(pwd)
#   cd $PROJ_BASE
#   docker build -t {{name}} .
#   exitcode=$?
#   cd $CD
#   return $exitcode
# }

# function dknpminstall {
#   CD=$(pwd)
#   cd $PROJ_BASE
#   docker run -it --rm -v $(pwd):/app -w /app/frontend -e NODE_ENV=development {{name}} npm install
#   exitcode=$?
#   cd $CD
#   return $exitcode
# }

function dkpgnginx {
  CD=$(pwd)
  cd $PROJ_BASE
  docker-compose -f utils/docker-compose.yaml up -d
  exitcode=$?
  cd $CD
  return $exitcode
}

# function dkup {
#   CD=$(pwd)
#   cd $PROJ_BASE
#   docker-compose -f docker/compose/dev.yaml up
#   exitcode=$?
#   cd $CD
#   return $exitcode
# }

# function dk {
#   docker exec -it {{name}} $@
# }

function echo_red {
  echo -e "\e[31m$1\e[0m";
}

function echo_green {
  echo -e "\e[32m$1\e[0m";
}

function echo_yellow {
  echo -e "${YELLOW}$1${RESTORE}";
}

echo_green "Welcome to dev env!"
devhelp

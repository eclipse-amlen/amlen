# Copyright (c) 2014-2021 Contributors to the Eclipse Foundation
# 
# See the NOTICE file(s) distributed with this work for additional
# information regarding copyright ownership.
# 
# This program and the accompanying materials are made available under the
# terms of the Eclipse Public License 2.0 which is available at
# http://www.eclipse.org/legal/epl-2.0
# 
# SPDX-License-Identifier: EPL-2.0
#

#We expect the source to be in a directory called this, zipped to a file with the same name (+.zip)
#This is the default format when I download the source from a branch in GHE
%define sourcename messagegateway-buildoss

#Disable debuginfo generation and stripping
%define __os_install_post %{nil}
%define debug_package %{nil}

Summary: Amlen SDK for Linux x86_64
Name: AmlenSDK
Version: 1.1dev
Release: 1%{?dist}
License: EPL-2.0
Packager: IMA Build
AutoReqProv: no
Group: Applications/Communications

Source0: %{sourcename}.zip
Source1: imasdk-deps.zip

BuildRoot: %{_topdir}/tmp/%{name}-%{Version}.${Release}
BuildRequires: libicu-devel,rpm-build,junit,icu,libxslt,ant-junit,python3,java-devel,gcc
#Requires: 

%description
Amlen SDK for Linux x86_64

%prep
%setup -n %{sourcename}

%build
export BUILD_LABEL="$(date +%Y%m%d-%H%M)_git_private"
#Where the source is
export SROOT=$RPM_BUILD_DIR/%{sourcename}
#Where binaries are built and assembled
export BROOT=$SROOT
#Where we should arrange files the hierarchy for the RPM:
export IMASDK_BASE_DIR=$BROOT/rpmtree
export USE_REAL_TRANSLATIONS=true
export SLESNORPMS=yes
export JAVA_HOME=/etc/alternatives/java_sdk

mkdir $RPM_BUILD_DIR/deps
export DEPS_HOME=$RPM_BUILD_DIR/deps
cd $DEPS_HOME
unzip %{_sourcedir}/imasdk-deps.zip

#export IMA_PATH_PROPERTIES=${SROOT}/server_build/ossbuild/samplerebrand/amlen-paths.properties
ant -Djsdoc.fails.build=false -f $SROOT/server_build/build.xml buildsdk-oss

%install
export DONT_STRIP=1
export IMASDK_BASE_DIR=$RPM_BUILD_DIR/%{sourcename}/rpmtree
mv $IMASDK_BASE_DIR/* "$RPM_BUILD_ROOT/"

%files
%defattr (-, root, bin)
/usr/share/amlen-sdk

%clean
rm -rf "$RPM_BUILD_ROOT"

%pre

%post

%preun

%postun

%posttrans

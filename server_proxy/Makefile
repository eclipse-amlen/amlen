# Copyright (c) 2012-2021 Contributors to the Eclipse Foundation
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


PROJECT = proxy

# Need to have PRJDIR before include so SRCDIR, INCDIR can be set correctly
PRJDIR=$(CURDIR)
# Specify the relative path from this project directory to the root of the directory structure
ROOTREL=..

include $(ROOTREL)/server_build/common.mk

# Include the server_transport source directory for headers and C files (wstcp.c)

$(eval $(call add-search-directory,.c,$(ROOTREL)/server_transport/src))
$(eval $(call add-search-directory,.c,$(ROOTREL)/server_utils/src))
$(eval $(call add-search-directory,.cpp,$(ROOTREL)/server_utils/src))
IFLAGS += -I$(ROOTREL)/server_proxy/src
IFLAGS += -I$(ROOTREL)/server_transport/src
IFLAGS += -I$(ROOTREL)/server_utils/src

#Files in this component need to know paths for server as it compiles some
#server_utils code that references those paths even though they aren't used
#here
#(uses the path_parser.py/paths.properties mechanism)
PATH_VAR_CFLAGS=$(IMA_SVR_AND_BRIDGE_AND_PROXY_PATH_DEFINES)

# Default the location of the mongo C driver - only needed if we include the activity code
ifeq ($(IMA_PROXY_ACTIVITY),TRUE)
MONGOC_LIBS=-lbson-1.0 -lmongoc-1.0

ifeq ($(MONGOC_HOME),)
MONGOC_INCLUDE=-I/opt/mongo-c-driver-1.9.5/include/libbson-1.0 -I/opt/mongo-c-driver-1.9.5/include/libmongoc-1.0
MONGOC_LIBPATH=-L/opt/mongo-c-driver-1.9.5/lib
else
MONGOC_INCLUDE=-I$(MONGOC_HOME)/include/libbson-1.0 -I$(MONGOC_HOME)/include/libmongoc-1.0
MONGOC_LIBPATH=-L$(MONGOC_HOME)/lib64
endif

else
#Don't need mongo
MONGOC_LIBS=
MONGOC_INCLUDE=
MONGOC_LIBPATH=
endif


# Add any required flags not specified in $(ROOTREL)/server_build/common.mk
IDFLAGS +=
# Try it either in the JVM or in build_tools
IFLAGS += -I$(JAVA_HOME)/include -I$(JAVA_HOME)/include/linux -I$(ROOTREL)/build_tools/applications/oracle -I$(ROOTREL)/server_transport/src $(MONGOC_INCLUDE)
CFLAGS += -DIMAPROXY -DGAI_SIG
CPPFLAGS += -std=c++11
LDFLAGS += $(MONGOC_LIBPATH) -Wl,-rpath,/opt/ibm/imaproxy/lib64
LDLIBS += $(IMA_ICU_LIBS) -licuuc -licui18n -licudata -lanl $(SSL_LIB) -lssl  -lcrypto -lcurl -ldl -lstatsdclient $(MONGOC_LIBS)
XFLAGS +=
SHARED_FLAGS +=

# ------------------------------------------------
# Add project specific make rules
# ------------------------------------------------

ifeq ($(IMA_PROXY_ACTIVITY),TRUE)
# Include the activity headers, C and  C++ files
IFLAGS += -I$(SRCDIR)/activity
CFLAGS += -DPX_CLIENTACTIVITY

$(eval $(call add-search-directory,.c,$(SRCDIR)/activity))
$(eval $(call add-search-directory,.cpp,$(SRCDIR)/activity))
$(eval $(call add-search-directory,.cpp,$(PRJDIR)/test_activity/src))

libimaproxy-activity-FILES = ActivityBank.cpp ActivityDB.cpp ActivityDBClient.cpp ActivityTracker.cpp ActivityUtils.cpp ActivityWorker.cpp CleanupWorker.cpp MurmurHash3.cpp pxactivity.cpp
libimaproxy-activity-test-FILES = UnitTestMain.cpp CyclicFileLogger.cpp ServerProxyUnitTestInit.cpp \
                                  PXActivityUnitTestTraceInit.cpp ProxyMembershipTest.cpp ActivityUtilsTest.cpp \
                                  ActivityTrackerCAPITest.cpp ActivityTrackerTest.cpp ActivityDBTest.cpp ActivityBankTest.cpp
else
libimaproxy-activity-FILES =
libimaproxy-activity-test-FILES =
#Don't include calls to activity code
CFLAGS += -DNO_PXACT
endif

imaproxy-FILES = proxy.c

libimaproxy-FILES = pxtransport.c pxtcp.c wstcp.c pxmqtt.c tenant.c pxconfig.c monitor.c        \
    javaconfig.c iotrest.c serverMqttCon.c auth.c pxkafka.c restconfig.c pxStatsdClient.c       \
    pxmux.c pxhttp.c pxkafkaauth.c pxawssqsclient.c pxrouting.c pxmhub.c \
    execinfo.c  ismutil.c  properties.c map.c server.c array.c  perfstat.c time.c rehash.c \
    timer.c ismlist.c logformat.c logwriter.c  bufferpool.c  global.c ssl.c tls.c timezone.cpp \
    json.c selector.c filter.c content.c trace.c copyright.c xmlparser.c throttle.c

imaproxy-LIBS = libimaproxy$(SO) libismutil$(SO)

libimaproxy-LIBS =

#$(eval $(call add-search-directory,.c,$(ROOTREL)/server_transport/src))

EXE-TARGETS += $(COMMON_BINDIR)/imaproxy$(EXE)
$(COMMON_BINDIR)/imaproxy$(EXE): $(call objects, $(imaproxy-FILES)) | \
                                 $(call libs, $(imaproxy-LIBS))
		$(call link-c-program)

DEBUG-EXE-TARGETS += $(COMMON_DEBUG_BINDIR)/imaproxy$(EXE)
$(COMMON_DEBUG_BINDIR)/imaproxy$(EXE): $(call debug-objects, $(imaproxy-FILES)) | \
                                       $(call debug-libs, $(imaproxy-LIBS))
		$(call debug-link-c-program)

COVERAGE-EXE-TARGETS += $(COMMON_COVERAGE_BINDIR)/imaproxy$(EXE)
$(COMMON_COVERAGE_BINDIR)/imaproxy$(EXE): $(call coverage-objects, $(imaproxy-FILES)) | \
                                          $(call coverage-libs, $(imaproxy-LIBS))
		$(call coverage-link-c-program)

LIB-TARGETS += $(LIBDIR)/libimaproxy$(SO)
$(LIBDIR)/libimaproxy$(SO): $(call objects, $(libimaproxy-FILES)) \
                            $(call objects, $(libimaproxy-activity-FILES)) | \
                            $(call libs, $(libimaproxy-LIBS))
		$(call make-c-library)

DEBUG-LIB-TARGETS += $(DEBUG_LIBDIR)/libimaproxy$(SO)
$(DEBUG_LIBDIR)/libimaproxy$(SO): $(call debug-objects, $(libimaproxy-FILES)) \
                                  $(call debug-objects, $(libimaproxy-activity-FILES)) | \
                                  $(call debug-libs, $(libimaproxy-LIBS))
		$(call debug-make-c-library)

COVERAGE-LIB-TARGETS += $(COVERAGE_LIBDIR)/libimaproxy$(SO)
$(COVERAGE_LIBDIR)/libimaproxy$(SO): $(call coverage-objects, $(libimaproxy-FILES)) \
                                     $(call coverage-objects, $(libimaproxy-activity-FILES)) | \
                                     $(call coverage-libs, $(libimaproxy-LIBS))
		$(call coverage-make-c-library)

test-LIBS = libimaproxy$(SO) libismutil$(SO)

CUNIT-TARGETS += $(CUNITTESTDIR)/proxy_test$(EXE)
$(CUNITTESTDIR)/proxy_test$(EXE): $(call objects, proxy_test.c) | \
                                  $(call debug-libs, $(test-LIBS))
		$(call build-cunit-test)

DEBUG-CUNIT-TARGETS += $(DEBUG_CUNITTESTDIR)/proxy_test$(EXE)
$(DEBUG_CUNITTESTDIR)/proxy_test$(EXE): $(call debug-objects, proxy_test.c) | \
                                        $(call debug-libs, $(test-LIBS))
		$(call debug-build-cunit-test)

COVERAGE-CUNIT-TARGETS += $(COVERAGE_CUNITTESTDIR)/proxy_test$(EXE)
$(COVERAGE_CUNITTESTDIR)/proxy_test$(EXE): $(call coverage-objects, proxy_test.c) | \
                                           $(call coverage-libs, $(test-LIBS))
		$(call coverage-build-cunit-test)

$(CUNITTESTDIR)/proxy_activity_test$(EXE): CPPFLAGS += -DBOOST_TEST_DYN_LINK
$(CUNITTESTDIR)/proxy_activity_test$(EXE): TESTLDFLAGS += -lstdc++ -lboost_unit_test_framework -lboost_system -lboost_date_time -lboost_timer -lboost_chrono
$(CUNITTESTDIR)/proxy_activity_test$(EXE): $(call objects, $(libimaproxy-activity-test-FILES)) | \
                                           $(call debug-libs, $(test-LIBS))
		$(call build-cunit-test)

CUNIT_BASIC += proxy_test
CUNIT_FULL += proxy_test

proxy_test: $(CUNITTESTDIR)/proxy_test$(EXE)
		$(call run-cunit-test,$<)
.PHONY:: transport_test

ifeq ($(IMA_PROXY_ACTIVITY),TRUE)
CUNIT_ACTIVITY += proxy_activity_test

proxy_activity_test: $(CUNITTESTDIR)/proxy_activity_test$(EXE)
		$(call run-cunit-test,$<)
.PHONY:: proxy_activity_test

activitytest: production ${CUNIT_ACTIVITY}
.PHONY:: activitytest
endif

DEBUG_CUNIT_BASIC += debug_proxy_test
DEBUG_CUNIT_FULL += debug_proxy_test
debug_proxy_test: $(DEBUG_CUNITTESTDIR)/proxy_test$(EXE)
		$(call debug-run-cunit-test,$<)
.PHONY:: debug_proxy_test

COVERAGE_CUNIT_BASIC += coverage_proxy_test
COVERAGE_CUNIT_FULL += coverage_proxy_test
coverage_proxy_test: $(COVERAGE_CUNITTESTDIR)/proxy_test$(EXE)
		$(call coverage-run-cunit-test,$<)
.PHONY:: coverage_proxy_test

TESTLDFLAGS += $(LDFLAGS),-rpath,$(MONGOC_HOME)/lib64
TESTLDLIBS += $(LDLIBS)

# Typical order: Directories, Targets, Debug-Targets
production: $(COMMON-DIR-TARGETS) $(DIR-TARGETS) $(LIB-TARGETS) $(EXE-TARGETS) $(CUNITTESTDIR)/proxy_test$(EXE)
debug: $(COMMON-DIR-TARGETS) $(DEBUG-DIR-TARGETS) $(DEBUG-LIB-TARGETS)  $(DEBUG-EXE-TARGETS) $(DEBUG_CUNITTESTDIR)/proxy_test$(EXE)

all: production debug

test: production $(CUNIT_BASIC)
fulltest: production $(CUNIT_BASIC) $(CUNIT_FULL)
debugtest: debug $(DEBUG_CUNIT_BASIC)
debugfulltest: debug $(DEBUG_CUNIT_BASIC) $(DEBUG_CUNIT_FULL)
coveragetest: coverage $(COVERAGE_CUNIT_BASIC)
coveragefulltest: coverage $(COVERAGE_CUNIT_BASIC) $(COVERAGE_CUNIT_FULL)

.PHONY:: production debug coverage all test fulltest coveragetest coveragefulltest debugtest debugfulltest

// Copyright (c) 2010-2021 Contributors to the Eclipse Foundation
//
// See the NOTICE file(s) distributed with this work for additional
// information regarding copyright ownership.
//
// This program and the accompanying materials are made available under the
// terms of the Eclipse Public License 2.0 which is available at
// http://www.eclipse.org/legal/epl-2.0
//
// SPDX-License-Identifier: EPL-2.0
//

/*
 * BoostAsioCompat.h
 *
 * Boost.Asio compatibility shim.
 *
 * boost::asio::io_service was renamed to boost::asio::io_context in
 * Boost 1.66.0 (BOOST_VERSION 106600) and the old name removed in 1.86.
 * On older platforms (e.g. RHEL 7 / Boost 1.53) io_context does not exist.
 * On newer platforms (Boost >= 1.66) io_service is gone.
 *
 * boost::asio::ip::address::from_string() and v4/v6 variants were also
 * deprecated in 1.66 and removed in 1.86.
 *
 * This header provides compatibility macros so that existing code compiles
 * on all supported platforms.
 */

#ifndef SPDR_BOOSTASIOCOMPAT_H_
#define SPDR_BOOSTASIOCOMPAT_H_

#include <boost/version.hpp>
#include <boost/asio.hpp>

#if BOOST_VERSION >= 106600
// Restore io_service as an alias for io_context
namespace boost { namespace asio {
    using io_service = io_context;
} }

// Provide wrappers for address::from_string() family
namespace spdr_compat {
    inline boost::asio::ip::address
    address_from_string(const std::string& s) {
        return boost::asio::ip::make_address(s);
    }
    inline boost::asio::ip::address_v4
    address_v4_from_string(const std::string& s) {
        return boost::asio::ip::make_address_v4(s);
    }
    inline boost::asio::ip::address_v6
    address_v6_from_string(const std::string& s) {
        return boost::asio::ip::make_address_v6(s);
    }
}
#define SPDR_ADDRESS_FROM_STRING(s)    spdr_compat::address_from_string(s)
#define SPDR_ADDRESS_V4_FROM_STRING(s) spdr_compat::address_v4_from_string(s)
#define SPDR_ADDRESS_V6_FROM_STRING(s) spdr_compat::address_v6_from_string(s)
#else
// On older Boost, keep the original static member calls
#define SPDR_ADDRESS_FROM_STRING(s)    boost::asio::ip::address::from_string(s)
#define SPDR_ADDRESS_V4_FROM_STRING(s) boost::asio::ip::address_v4::from_string(s)
#define SPDR_ADDRESS_V6_FROM_STRING(s) boost::asio::ip::address_v6::from_string(s)
#endif

#endif /* SPDR_BOOSTASIOCOMPAT_H_ */
